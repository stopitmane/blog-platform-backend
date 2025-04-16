# Blog Platform Backend

This is the backend part of the Blog Platform. It is built using Django (with Django REST Framework for the API) and is designed to manage blog posts, user authentication, and profile management.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Python 3.8+](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/) (Python package installer)
- [PostgreSQL](https://www.postgresql.org/) (or any database you choose)

## Installation

1. **Clone the repository:**

   Clone the project repository to your local machine using Git.

   ```bash
   git clone https://github.com/stopitmane/blog-platform-backend.git
Navigate to the backend directory:

bash

cd blog-platform-backend
Create a virtual environment:

It's recommended to use a virtual environment to manage dependencies.

bash

python -m venv env
Activate the virtual environment:

On Windows:

bash

.\env\Scripts\activate
On macOS/Linux:

bash

source env/bin/activate
Install dependencies:

Run the following command to install the necessary dependencies:

bash

pip install -r requirements.txt
Setup
Create a .env file:

In the root of the project, create a .env file and add your environment variables, including the database URL, secret key, etc. Example:

ini

SECRET_KEY=your_secret_key
DEBUG=True
ALLOWED_HOSTS=localhost
DATABASE_URL=postgres://user:password@localhost:5432/dbname
Set up the database:

Make sure your PostgreSQL database is running. If using PostgreSQL, create a new database for your project:

bash

psql -U postgres
CREATE DATABASE blog_platform;
Replace the DATABASE_URL in the .env file with the correct credentials.

Run migrations:

Apply the migrations to set up the database schema:

bash

python manage.py migrate
Create a superuser:

Create a superuser account for Django's admin panel:

bash

python manage.py createsuperuser
Start the development server:

Run the following command to start the server:

bash

python manage.py runserver
This will start the backend server at http://localhost:8000.
