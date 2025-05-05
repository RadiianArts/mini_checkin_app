const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const ScanIDService = require('./services/ScanIDService');
const WixService = require('./services/WixService');
const WixApiExplorer = require('./services/WixApiExplorer');
const WixSdkTest = require('./services/WixSdkTest');
const WixSdkTestSimple = require('./services/WixSdkTestSimple');
const WixSdkInspector = require('./services/WixSdkInspector');
const WixSdkAdapter = require('./services/WixSdkAdapter');
const WixSdkCompatAdapter = require('./services/WixSdkCompatAdapter');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  mainWindow.loadFile(path.join(__dirname, 'renderer/index.html'));
  mainWindow.on('closed', () => { mainWindow = null; });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (mainWindow === null) createWindow(); });

// IPC: Read latest Scan-ID CSV entry
ipcMain.handle('scanid:get-latest', async () => {
  return await ScanIDService.getLatestScan();
});

// IPC: Lookup Wix member by Scan-ID data
ipcMain.handle('wix:find-member', async (event, { firstName, lastName, dateOfBirth }) => {
  return await WixService.findMember({ firstName, lastName, dateOfBirth });
});

// IPC: Wix API Explorer handlers
ipcMain.handle('wix-explorer:get-config', async () => {
  return WixApiExplorer.getConfig();
});

ipcMain.handle('wix-explorer:get-endpoints', async () => {
  return WixApiExplorer.getAvailableEndpoints();
});

ipcMain.handle('wix-explorer:test-api', async (event, { endpointId, searchParams }) => {
  return await WixApiExplorer.testApiCall(endpointId, searchParams);
});

// IPC: Test Wix JavaScript SDK
ipcMain.handle('wix-sdk:test', async (event, { collectionId }) => {
  return await WixSdkTest.testSdk(collectionId);
});

// Simple Wix SDK Test handler
ipcMain.handle('wix-sdk:test-simple', async (event, { collectionId }) => {
  return await WixSdkTestSimple.testSdkSimple(collectionId);
});

// Wix SDK Inspector handler
ipcMain.handle('wix-sdk:inspect', async () => {
  return await WixSdkInspector.inspectSdk();
});

// Wix SDK Adapter handler
ipcMain.handle('wix-sdk:adapter-test', async (event, { collectionId }) => {
  return await WixSdkAdapter.testAdapter(collectionId);
});

// Direct API handlers removed - using only SDK as per requirements

// Wix SDK Compatibility Adapter handler
ipcMain.handle('wix-sdk:compat-test', async (event, { collectionId }) => {
  return await WixSdkCompatAdapter.testCompatAdapter(collectionId);
});

// Wix SDK Member Search handler
ipcMain.handle('wix-sdk:search-member', async (event, { firstName, lastName, dateOfBirth }) => {
  return await WixSdkAdapter.searchMember({ firstName, lastName, dateOfBirth });
});

// Wix SDK Query All Members handler
ipcMain.handle('wix-sdk:query-all-members', async () => {
  const adapter = new WixSdkAdapter();
  return await adapter.queryAllMembers();
});

// Wix SDK List Pricing Plan Orders handler
ipcMain.handle('wix-sdk:list-pricing-plan-orders', async (event, { filter }) => {
  console.log('Received request to list pricing plan orders with filter:', filter);
  return await WixSdkAdapter.listPricingPlanOrders(filter);
});

// App restart handler
ipcMain.handle('app:restart', () => {
  app.relaunch();
  app.exit();
});
