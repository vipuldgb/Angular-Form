# Angular Reactive Form with Tailwind CSS

This project is a simple form created using **Angular Reactive Forms**. The form contains fields for first name, last name, email, date of birth (DOB), and gender. The form validates user input using Angular Validators. Additionally, it uses **Tailwind CSS** for styling, and displays the submitted user data in a table format.

## Features

- Reactive form in Angular.
- Form validation using Angular's built-in validators:
  - First Name and Last Name: Must be at least 2 characters long.
  - User Name : Must be atleast 4 Characters long.
  - Email: Must be a valid email format.
  - All fields are required.
- Tailwind CSS is used for styling the form and the table.
- User data is displayed in a table format upon form submission.

## Form Fields

- **First Name** (Required, at least 2 characters)
- **Last Name** (Required, at least 2 characters)
- **Email** (Required, must be a valid email format)
- **Date of Birth (DOB)** (Required)
- **Gender** (Required)

## Form Validation

### Angular Validators Used:
- `Validators.required` for all fields (First Name, Last Name, Email, DOB, and Gender).
- `Validators.minLength(2)` for First Name and Last Name (minimum of 2 characters).
- `Validators.email` for Email (must follow valid email format).
 
 
