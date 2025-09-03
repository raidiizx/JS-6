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

## 1.1 September 3rd 2025 

- **Total Test Cases:** ['32']
- **Executed:** [Number]
- **Passed:** [Number]
- **Failed:** [Number]
- **Await** [1] 
- **Pass Rate:** [...%]

## 2. Test Scope

- **Features Tested:**

  - [Authentication & Access Control] 
  - [User, Role, and Permission Management] 
  - [Employee Management] 
  - [Master Data Management]
  - [Plan Management]
  - [Strategy Management]
  - [Tactic Management]

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
| TC13  | Create employee                             | Failed | DEF-003   |  position ID can be negative number    | 
| TC14  | Read employee                               | Passed |           |                                        | 
| TC15  | Update employee                             | Passed |           |                                        | 
| TC16  | Delete employee                             | Passed |           |                                        | 
| TC17  | Prevent employee deletion with dependencies | Passed |           |                                        | 
| TC18  | Unique email validation                     | Failed | DEF-004   |  Not define error message to "email must be unique" | 
| TC19  | Import valid employee CSV                   | Failed | DEF-005   |  No success uploaded message is shown  | 
| TC20  | Import invalid employee CSV                 | Passed |           |                                        | 
| TC21  | Import employee with missing references     | Passed |           |                                        | 
| TC22  | Add master data (e.g., department, position)| Passed |           |                                        | 
| TC23  | Edit master data                            | Passed |           |                                        | 
| TC24  | Delete master data with dependencies        | Failed | DEF-006   | Sub department deletable               | 
| TC25  | Import valid master data CSV                | Failed | DEF-005   | No success uploaded message is shown   | 
| TC26  | Import master data with missing references  | Passed |           |                                        | 
| TC27  | Create plan                                 | Passed |           |                                        | 
| TC28  | Read plan                                   | Passed |           |                                        | 
| TC29  | Update plan                                 | Passed |           |                                        | 
| TC30  | Delete plan with no strategies              | Passed |           |                                        | 
| TC31  | Prevent plan deletion with strategies       | Passed |           |                                        | 
| TC32  | Clone plan                                  | Passed |           |                                        | 
    .
    .
    .
| TC42  | Prevent tactic deletion with projects       | Passed |           |                                        | 

    



## 4. Defect Summary

| Defect ID | Title/Description                                                     | Severity | Status | Owner    | Comments            |
| --------- | --------------------------------------------------------------------  | -------- | ------ | -------- | ------------------- |
| DEF-001   | invalid email domain user can login                                   | High     | Open   | Dev Team | Needs investigation |
| DEF-002   | Login is blocked but error message is "ไม่สามารถเข้าสู่ระบบได้ (AUTH-01)" instead of "Account banned"   | High     | Open   | Dev Team |                     |
| DEF-003   | Employee can be create but position ID shouldn't be able to be negative number | High  | Open   | Dev Team |                     |
| DEF-004   | Email is validate but the warning message is not define to "Email must be unique" just show "ข้อมูลบุคลากรซ้ำกับที่มีอยู่ในระบบ" | High | Open   | Dev Team |                     |
| DEF-005   | CSV file can be imported but there's no success message is shown      | High     | Open   | Dev Team |                     |
| DEF-006   | Sub department can be freely delete                                   |          | Open   | Dev Team |                     |



## 5. Observations & Recommendations

- [Summarize key findings, risks, and recommendations for next steps.]

**Attachments:**

- [Test logs, screenshots, defect reports, etc.]
