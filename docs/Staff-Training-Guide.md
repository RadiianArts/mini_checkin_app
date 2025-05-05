# Mini Check-In App: Staff Training Guide

## Introduction

Welcome to the Mini Check-In App training guide. This document will help you understand how to use the application for member check-in and account verification at Tribute Music Gallery. The app is designed to be intuitive and efficient, allowing you to quickly verify members and access their information.

## Getting Started

### Launching the Application

1. Open the Mini Check-In App by double-clicking the application icon
2. The app will load and display the main check-in interface
3. Ensure the Scan-ID device is connected to the computer

### Interface Overview

The application has a clean, simple interface with the following main sections:

- **Scan Controls**: Buttons to scan IDs and monitor for new scans
- **Scan Result**: Displays information from the scanned ID
- **Account Information**: Shows matching Wix contacts with confidence scores
- **Diagnostics Panel**: Provides technical details (for troubleshooting)

## Using the Scan-ID Feature

### Manual Scanning

1. Click the "Scan ID" button to read the latest scan from the Scan-ID device
2. The app will display the person's information from their ID:
   - Full Name
   - Date of Birth
   - ID Number
   - Expiration Date
   - Scan Time

### Automatic Scanning (Watch Mode)

1. Click "Watch Scan-ID" to enable automatic monitoring
2. The app will continuously check for new scans
3. When a new ID is scanned, it will automatically process and display the results
4. To stop watching, click "Stop Watching"

## Understanding Confidence-Based Matching

The app uses an intelligent system to match scanned IDs with contacts in your Wix database. This system assigns a confidence score to each potential match and color-codes them for easy identification.

### Confidence Levels

Matches are displayed with color-coding based on their confidence score:

- **High Confidence (Green)**: 60-100 points
  - These are the most likely matches
  - Usually have exact last name matches with at least partial first name matches
  - May also have matching date of birth

- **Medium Confidence (Yellow)**: 35-59 points
  - Possible matches that require verification
  - May have partial name matches or slight variations

- **Low Confidence (Red)**: 0-34 points
  - Least likely matches
  - Significant differences in name or other details

### Match Details

Each match displays:
- The contact's name
- Confidence score
- Detailed explanation of why it was matched (e.g., "First name part exact match: 'Brandon'")
- Contact details (ID, email, creation date)

### Best Practices for Verifying Matches

1. **Always check high confidence matches first**
   - Green matches are the most likely to be correct
   - Verify by confirming details with the member

2. **Look for exact last name matches**
   - Last names are more unique and reliable for identification
   - The system prioritizes exact last name matches

3. **Consider nicknames and name variations**
   - The system handles common nicknames (e.g., "Bob" for "Robert")
   - Check the match details to see which name parts matched

4. **Use date of birth as confirmation**
   - When available, DOB is a strong secondary identifier
   - Matches with the same DOB receive a significant confidence boost

5. **When in doubt, ask for additional verification**
   - Ask for the member's email address or phone number
   - Check their photo ID against their profile picture (if available)

## Viewing Member Information

### Pricing Plans

1. Select a matched contact by clicking on their entry
2. Click the "View Plans" button
3. The system will display the member's pricing plans and subscription details

### Member History

If implemented, you can view a member's check-in history and other account details by:
1. Select the matched contact
2. Click "View History" (if available)
3. Review their past check-ins and account activity

## Troubleshooting

### Common Issues

1. **No matches found**
   - Check if the name was scanned correctly
   - Try searching with a different spelling or nickname
   - The person may not have an account in the system

2. **Scan-ID device not detected**
   - Ensure the device is properly connected
   - Check that the Scan-ID export file is accessible
   - Restart the application

3. **Low confidence matches only**
   - Verify the person's identity manually
   - They may have registered with a different name
   - Consider updating their contact information in Wix

### Getting Help

If you encounter issues not covered in this guide:
1. Check the diagnostics panel for error messages
2. Contact technical support with details about the issue
3. Include any error messages and steps to reproduce the problem

## Best Practices for Check-In

1. **Be efficient but thorough**
   - Trust high confidence matches but verify key details
   - For medium/low confidence matches, verify more thoroughly

2. **Update contact information when needed**
   - If you notice outdated information, update it in the Wix system
   - This improves future matching accuracy

3. **Handle edge cases gracefully**
   - Some members may have unusual name situations (legal name changes, etc.)
   - Use your judgment and prioritize member experience

## New Account Activation

For detailed instructions on activating new accounts, please refer to the [New Account Activation Flow](./New-Account-Activation-flow.md) document.

---

## Quick Reference

### Confidence Score Components

The system calculates confidence scores based on:
- First name matching (up to 40 points)
- Last name matching (up to 40 points)
- Date of birth matching (up to 20 points)
- Special bonuses for combined matches (up to 20 additional points)

### Special Bonuses

- Exact first name part + exact last name: +20 points
- Partial first name + exact last name: +15 points
- Partial first name + partial last name: +8 points

### Keyboard Shortcuts

- `Ctrl+S` or `Cmd+S`: Perform a scan
- `Ctrl+W` or `Cmd+W`: Toggle watch mode
- `Esc`: Cancel current operation

---

*This training guide is intended for staff use at Tribute Music Gallery. For technical documentation or developer information, please refer to the project README and developer guides.*
