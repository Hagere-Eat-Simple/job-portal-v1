# Project Documentation: Job Portal

## Introduction

The Job Portal is a web application built using Next.js and Python. It facilitates the interaction between job seekers and employers by providing a platform for job listing, application submission, and communication. This documentation outlines the installation process and describes the functional requirements of the project.

## Project Team

### Group Members

| Member Names           | Id          |
|------------------------|-------------|
| Yabsera Haile          | ETS0660/12  |
| Yayehyrad Sisay        | ETS0668/12  |
| Emran Hayredin         | ETS0986/12  |
| Yared Babesha          | ETS0667/12  |
| Vanilla Getachew       | ETS0652/12  |
| Bereket Sintayehu      | ETS0967/12  |

## Installation Guide

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [npm](https://www.npmjs.com/)

### Steps

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/Hagere-Eat-Simple/job-portal-v1.git
    cd job-portal
    ```

2. **Install Dependencies:**
    ```bash
    # Install project dependencies
    npm install

    ```

3. **Run the Scraping Code:**
    ```bash
    # Navigate to the scraping directory
    cd py

    # Run the scraping script
    python main.py
    ```

4. **Configure Database:**
    - Set up a MongoDB database and obtain the database URL.
    - Create a `.env` file in the root of the project.
    - Add the following line to the `.env` file, replacing `<YOUR_MONGO_URL>` with your actual MongoDB database URL:
      ```
      MONGOURL=<YOUR_MONGO_URL>
      ```


5. **Run the Application:**
    ```bash
    #  Start backend
    cd Back_End
    npm run dev
    # Start Next.js frontend
    cd job_board
    next start
    ```
    

6. **Access the Application:**
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend: [http://localhost:8000](http://localhost:8000)

## Functionalities

### 1. User Registration and Authentication

- Allow job seekers and employers to register and create user accounts.
- Implement secure authentication mechanisms, such as username/password or social login options.
- Admin Dashboard that contains functionalities giving the admin control over the users.

### 2. Job Listing Management

- Provide an interface for employers to create, edit, and delete job listings.
- Include fields for job title, description, location, industry, experience level, and required qualifications.
- Implement job fetching functionality to fetch jobs from other websites.

### 3. Job Search and Filtering

- Develop a robust search functionality for job seekers based on various criteria.
- Implement filtering options to refine search results based on specific parameters.

### 4. User Profiles

- Allow job seekers and employers to create and manage profiles with relevant information.
- Enable job seekers to showcase their resumes and other supporting documents.

### 5. Application Submission

- Enable job seekers to apply for job listings by submitting resumes, cover letters, and additional documents.
- Implement file upload functionality to allow users to attach supporting documents.

### 6. Notifications

- Implement a notification system to keep users informed about new job listings, application updates, and other relevant notifications.
- Send email or in-app notifications for important events.
- Allow communication between companies and job seekers via online contact forms or messaging.

### 7. Employer Dashboard

- Create a dedicated dashboard for employers to manage their job listings.
- Provide functionality to view applicant profiles, track application statuses, and communicate with candidates.

### 8. Application Tracking System

- Develop a system for employers to track and manage the application process.
- Allow employers to review applications, schedule interviews, and make hiring decisions within the system.

### 9. Mobile Responsiveness

- Ensure that the website is optimized for mobile devices, allowing users to access and use the platform seamlessly on various screen sizes.

### 10. Security and Data Privacy

- Implement robust security measures to protect user data, including secure authentication and encryption protocols.
- Comply with relevant data privacy regulations and ensure user consent for data collection and processing.
