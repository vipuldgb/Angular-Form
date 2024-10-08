<h1>Angular Reactive Form with Tailwind CSS</h1>
 <p>This project is a simple form created using <strong>Angular Reactive Forms</strong>. The form contains fields for first name, last name, email, date of birth (DOB), and gender. The form validates user input using Angular Validators. Additionally, it uses <strong>Tailwind CSS</strong> for styling, and displays the submitted user data in a table format.</p>
 <h2>Features</h2>
    <ul>
        <li>Reactive form in Angular.</li>
        <li>Form validation using Angular's built-in validators:
            <ul>
                <li>First Name and Last Name: Must be at least 2 characters long.</li>
                <li>User Name: Must be at least 4 characters long.</li>
                <li>Email: Must be a valid email format.</li>
                <li>All fields are required.</li>
            </ul>
        </li>
        <li>Tailwind CSS is used for styling the form and the table.</li>
        <li>User data is displayed in a table format upon form submission.</li>
    </ul>

  <h2>Form Fields</h2>
    <ul>
        <li><strong>First Name</strong> (Required, at least 2 characters)</li>
        <li><strong>Last Name</strong> (Required, at least 2 characters)</li>
        <li><strong>User Name</strong> (Required, at least 4 characters)</li>
        <li><strong>Email</strong> (Required, must be a valid email format)</li>
        <li><strong>Date of Birth (DOB)</strong> (Required)</li>
        <li><strong>Gender</strong> (Required)</li>
    </ul>

   <h2>Form Validation</h2>
    <h3>Angular Validators Used:</h3>
    <ul>
        <li><code>Validators.required</code> for all fields (First Name, Last Name, User Name, Email, DOB, and Gender).</li>
        <li><code>Validators.minLength(2)</code> for First Name and Last Name (minimum of 2 characters).</li>
        <li><code>Validators.minLength(4)</code> for User Name (minimum of 4 characters).</li>
        <li><code>Validators.email</code> for Email (must follow valid email format).</li>
    </ul>
