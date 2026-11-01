# Full-Stack Internship Tasks

Day-wise tasks and projects completed during my full-stack development internship (React.js, SQL, and the MERN stack).

**Author:** Pranav Patil
**GitHub:** [Pranavpatil-97](https://github.com/Pranavpatil-97)


## Tech Stack
- **Frontend:** React.js, Vite, React Router
- **Database:** MySQL
- **Tools:** Git, GitHub, VS Code, MySQL Workbench

## Progress

| Day | Topic | Folder | Status |
|-----|-------|--------|--------|
| 10 | React.js Introduction | `day10-react-intro` | Done |
| 11 | React Components, State & Forms | `day11-react-forms` | Done |
| 12 | React Routing | `day12-react-routing` | Done |
| 13 | Database Fundamentals | `day13-database-fundamentals` | Done |
| 14 | SQL Fundamentals | `day14-sql-fundamentals` | Done |
| 15 | Advanced SQL | `day15-advanced-sql` | Done |

## Task Details

### Day 10: React.js Introduction
- Created a React app using Vite
- Built reusable `Header`, `Footer`, and `Home` components
- Passed data between components using props

### Day 11: Components, State & Forms
- Built a student registration form (name, email, course)
- Used `useState` with controlled components
- Added form validation and displayed submitted details

### Day 12: React Routing
- Configured React Router with `BrowserRouter`, `Routes`, and `Route`
- Created Home, About, Students, and Contact pages
- Added dynamic route (`/students/:id`) and a 404 page

### Day 13: Database Fundamentals
- Designed the `student_management` database (students, courses, enrollments)
- Defined primary keys, foreign keys, and relationships
- Created the ER diagram (`er-diagram.png`)

### Day 14: SQL Fundamentals
- Wrote `CREATE`, `ALTER`, `DROP`, `INSERT`, `UPDATE`, and `DELETE` queries
- Practiced `SELECT` with `WHERE`, `ORDER BY`, and `LIMIT`
- Tested constraints (`PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `CHECK`)

### Day 15: Advanced SQL
- Used aggregate functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`)
- Wrote joins, `GROUP BY` / `HAVING`, and subqueries
- Created indexes and reviewed normalization

## How to Run

### React projects (Days 10 to 12)
```bash
cd day12-react-routing
npm install
npm run dev
```
Open the `localhost` link shown in the terminal (usually http://localhost:5173).

### SQL files (Days 13 to 15)
```bash
cd day15-advanced-sql
mysql -u root -p < 00_reset_seed.sql
mysql -u root -p -t < 01_aggregates.sql
```
Or open the `.sql` files in MySQL Workbench and run them in order.

## Repository Structure
```
Internship/
├── day10-react-intro/
├── day11-react-forms/
├── day12-react-routing/
├── day13-database-fundamentals/
│   ├── schema.sql
│   ├── seed.sql
│   ├── queries.sql
│   └── er-diagram.png
├── day14-sql-fundamentals/
├── day15-advanced-sql/
└── README.md
```

## Contact
- Email: <your email>
- LinkedIn: <your LinkedIn URL>
