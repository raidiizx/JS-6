# Test Report

**Project:** Jasmine  
**Commit:** [1845098ccd63f54f979228961102fd46cabd5b74]  
**Prepared by:** [Akatsuki]  
**Test Cases:** [808d7dadf3fafcd401659ecf01460c12b0001871]  
**Date:** [September 3rd 2025]

## 1. Summary

- **Total Test Cases:** [76]
- **Executed:** [Number]
- **Passed:** [Number]
- **Failed:** [Number]
- **Pass Rate:** [...%]

## 1.1 September 3rd 2025 

- **Total Test Cases:** ['76']
- **Executed:** [75]
- **Passed:** [62]
- **Failed:** [13]
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
  - [Project Management]
  - [Activity Management]
  - [OKR Management]
  - [Budget Calculation and Display]
  - [UI Requirements]

- **Features Not Tested / Deferred:**
  - [List any modules/features not tested, with reasons]

## 3. Test Results

| TC ID | Test Case Description                       | Status | Defect ID | Comments                               |
| ----- | ------------------------                    | ------ | --------- | ---------------------                  |
| TC01  | Login with valid KKU SSO                    | Passed |           |                                        |
| TC02  | Login with invalid email domain             | Failed | DEF-001   | Google auth still redirect to dashbord.|
| TC03  | Login with non-Faculty of Education user    | Await  |           |                                        |
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
| TC25  | Import valid master data CSV                | Failed | DEF-007   | No success uploaded message is shown   | 
| TC26  | Import master data with missing references  | Passed |           |                                        | 
| TC27  | Create plan                                 | Passed |           |                                        | 
| TC28  | Read plan                                   | Passed |           |                                        | 
| TC29  | Update plan                                 | Passed |           |                                        | 
| TC30  | Delete plan with no strategies              | Passed |           |                                        | 
| TC31  | Prevent plan deletion with strategies       | Passed |           |                                        | 
| TC32  | Clone plan                                  | Passed |           |                                        | 
| TC33  | Create strategy                             | Passed |           |                                        | 
| TC34  | Read strategy                               | Passed |           |                                        | 
| TC35  | Update strategy                             | Passed |           |                                        | 
| TC36  | Delete strategy with no tactics             | Passed |           |                                        | 
| TC37  | Prevent strategy deletion with tactics      | Passed |           |                                        | 
| TC38  | Create tactic                               | Passed |           |                                        | 
| TC39  | Read tactic                                 | Passed |           |                                        | 
| TC40  | Update tactic                               | Passed |           |                                        | 
| TC41  | Delete tactic with no projects              | Passed |           |                                        | 
| TC42  | Prevent tactic deletion with projects       | Passed |           |                                        | 
| TC43  | Create project                              | Passed |           |                                        | 
| TC44  | Read project                                | Passed |           |                                        | 
| TC45  | Update project                              | Passed |           |                                        | 
| TC46  | Delete project with no activities           | Passed |           |                                        | 
| TC47  | PPrevent project deletion with activities   | Passed |           |                                        | 
| TC48  | Unique code/name validation                 | Passed |           |                                        | 
| TC49  | Link project to multiple OKRs               | Passed |           |                                        | 
| TC50  | Unlink project from OKR                     | Passed |           |                                        | 
| TC51  | Import valid project CSV                    | Passed |           |                                        |
| TC52  | Import project with missing OKR             | Passed |           |                                        | 
| TC53  | Create activity                             | Failed | DEF-008   | Order can be negative number.          | 
| TC54  | Read activity                               | Passed |           |                                        | 
| TC55  | Update activity                             | Passed |           |                                        | 
| TC56  | Delete activity with no approvals/logs      | Passed |           |                                        | 
| TC57  | Prevent activity deletion with approvals/logs        | Passed    |           |                            | 
| TC58  | Unique order/name validation                | Failed | DEF-009   | validation failed.                     | 
| TC59  | Create OKR                                  | Passed |           |                                        | 
| TC60  | Read OKR                                    | Passed |           |                                        | 
| TC61  | Update OKR                                  | Passed |           |                                        | 
| TC62  | Delete OKR with no projects                 | Passed |           |                                        | 
| TC63  | Prevent OKR deletion if linked to project   | Passed |           |                                        | 
| TC64  | Edit OKR responsibility flags               | Passed |           |                                        | 
| TC65  | Filter/search OKRs                          | Failed | DEF-010   |  Don't see any search field or filter for okr.| 
| TC66  | Activity budget entry                       | Passed |           |                                        | 
| TC67  | Project budget calculation                  | Failed | DEF-011   |  No budget show.                       | 
| TC68  | OKR budget calculation                      | Failed | DEF-012   |  No budget show.                       | 
| TC69  | Tactic budget calculation                   | Failed | DEF-013   |  No budget show.                       | 
| TC70  | Employee budget calculation                 | Passed |           |                                        | 
| TC71  | Display quarterly budget totals             | Passed |           |                                        | 
| TC72  | Strategy and tactic selector in add/edit project                                        | Passed |           |                                        | 
| TC73  | Display OKR target values in project/activity pages                                     | Passed |           |                                        | 
| TC74  | Display employee budget, position budget, management position budget in employee pages  | Passed |           |                                        | 
| TC75  | Display project code as activity code                                                   | Passed |           |                                        | 
| TC76  | Employee name display with prefix and position type                                     | Passed |           |                                        | 

## 4. Defect Summary

| Defect ID | Title/Description                                                     | Severity | Status | Owner    | Comments            |
| --------- | --------------------------------------------------------------------  | -------- | ------ | -------- | ------------------- |
| DEF-001   | invalid email domain user can login.                                  | High     | Open   | Dev Team | Needs investigation |
| DEF-002   | Login is blocked but error message is "ไม่สามารถเข้าสู่ระบบได้ (AUTH-01)" instead of "Account banned"   | High     | Open   | Dev Team |                     |
| DEF-003   | Employee can be create but position ID shouldn't be able to be negative number. | High  | Open   | Dev Team |                     |
| DEF-004   | Email is validate but the warning message is not define to "Email must be unique" just show "ข้อมูลบุคลากรซ้ำกับที่มีอยู่ในระบบ" | High | Open  | Dev Team  | Needs investigation |        
| DEF-005   | CSV file can be imported but there's no success message is shown.     | High     | Open   | Dev Team |                     |
| DEF-006   | Sub department can be freely delete.                                  | High    | Open   | Dev Team |                     |
| DEF-007   | No success uploaded message is shown, but data from csv file can be imported normally |  High  | Open   | Dev Team |                     |
| DEF-008   | On create activity the Activity order can be negative.                |  High    | Open   | Dev Team |                     |
| DEF-009   | Can be create the activity with both name and order.(order/name not unique)  |  High    | Open   | Dev Team |                     |
| DEF-010   | There's no search field or filter for OKR.                            |  Medium  | Open   | Dev Team |                     |
| DEF-011   | There's no budget show in project details.(no UI)                     |  High    | Open   | Dev Team |                     |
| DEF-012   | There's no budget show in OKR details.(no UI)                         |  High    | Open   | Dev Team |                     |
| DEF-013   | There's no budget show in tactic details.(no UI)                      |  High    | Open   | Dev Team |                     |

| DEF-007   | Data shown on UI from CSV file 'code' and 'name' columns is always determined by the 'code' column." |  High  | Open   | Dev Team |                     |
## 5. Observations & Recommendations

- [Mostly minor UI error but still have some concern such as TC58, Google redirect all domain ,don't see any search/filter for okr.]

**Attachments:**

- [Test logs, screenshots, defect reports, etc.]
