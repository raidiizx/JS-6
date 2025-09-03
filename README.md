# Test Report

**Project:** Jasmine  
**Commit:** [1845098ccd63f54f979228961102fd46cabd5b74]  
**Prepared by:** [Tester Name]  
**Test Cases:** [Test Cases Commit]  
**Date:** [September 3rd 2025]

## 1. Summary

- **Total Test Cases:** ['76']
- **Executed:** [Number]
- **Passed:** [Number]
- **Failed:** [Number]
- **Pass Rate:** [...%]

## 2. Test Scope

- **Features Tested:**

  - [Authentication & Access Control] 
  - [User, Role, and Permission Management] 
  - [Employee Management] 

- **Features Not Tested / Deferred:**
  - [List any modules/features not tested, with reasons]

## 3. Test Results

| TC ID | Test Case Description                       | Status | Defect ID | Comments                               |
| ----- | ------------------------                    | ------ | --------- | ---------------------                  |
| TC01  | Login with valid KKU SSO                    | Passed |           |                                        |
| TC02  | Login with invalid email domain             | Failed | DEF-001   | Google auth still redirect to dashbord.|
| TC03  | Login with non-Faculty of Education user    | await  |           |                                        |
| TC04  | Banned user login                           | Failed | DEF-002   | Wrong error message.                   | 
| TC05  | Session timeout                             | Passed |           |                                        | 
| TC06  | Role-based access                           | Passed |           |                                        | 
| TC07  | Admin views user accounts                   | Passed |           |                                        | 
| TC08  | Admin assigns or removes roles              | Passed |           |                                        | 
| TC09  | Admin bans or unbans user                   | Passed |           |                                        | 
| TC10  | Prevent deletion of roles with dependencies | Passed |           |                                        | 
| TC11  | Add new role                                | Passed |           |                                        | 
| TC12  | Edit role permissions                       | Passed |           |                                        | 
| TC13  | ...                                         | ...    | ...       | ...                                    | 
| TC14  | ...                                         | ...    | ...       | ...                                    | 
| TC15  | ...                                         | ...    | ...       | ...                                    | 

## 4. Defect Summary

| Defect ID | Title/Description                                                     | Severity | Status | Owner    | Comments            |
| --------- | --------------------------------------------------------------------  | -------- | ------ | -------- | ------------------- |
| DEF-001   | invalid email domain user can login                                   | High     | Open   | Dev Team | Needs investigation |
| DEF-002   | Login is blocked but error message is "ไม่สามารถเข้าสู่ระบบได้ (AUTH-01)"   | High     | Open   | Dev Team |                     |
|           | instead of "Account banned"                                           |          |        |          |                     |

## 5. Observations & Recommendations

- [Summarize key findings, risks, and recommendations for next steps.]

**Attachments:**

- [Test logs, screenshots, defect reports, etc.]
