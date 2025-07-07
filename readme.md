# 🛠️ React Portfolio - Fullstack Developer Showcase

A professional portfolio built with React, showcasing frontend development projects, contact information, and responsive UI. This project emphasizes modern DevOps practices, CI/CD pipeline integration, and is open-source friendly for community collaboration. Created by Ongun Akay during the Meta Front-End Developer Specialization.

---

## 📸 Preview

![Portfolio Screenshot](public/avatar.png)  
> Clean, modern design powered by React, Chakra UI, and Framer Motion.

---

## 🚀 Tech Stack

| Category        | Technology                                 |
|----------------|---------------------------------------------|
| Frontend       | React, React Router, Chakra UI, Framer Motion |
| State/Context  | React Context API                           |
| Forms & Validation | Formik, Yup                          |
| Icons          | Font Awesome, React Icons                  |
| Animations     | Framer Motion                               |
| DevOps/CI      | GitHub Actions, npm scripts                 |
| Build Tool     | react-scripts / Webpack                     |

---

## 📂 Project Structure

```

meta-frontend-project/
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # UI components
│   ├── contexts/         # Context API
│   ├── hooks/            # Custom hooks
│   ├── App.js            # Main App
│   └── theme.js          # UI theme config
├── build/                # Production build output
├── .github/workflows/    # GitHub Actions workflows (CI/CD)
├── package.json          # Project metadata & scripts
└── README.md             # Project documentation

````

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ongunakaycom/meta-frontend-project.git
cd meta-frontend-project

# Install dependencies
npm install

# Run in development
npm start
````

---

## 🧪 Run Tests

```bash
npm test
```

---

## 🏗️ Build for Production

```bash
npm run build
```

---

## ⚙️ GitHub Actions (CI/CD)

This project uses **GitHub Actions** to:

* ✅ Run build and lint checks on pull requests
* 🚀 Deploy to GitHub Pages or platforms like Netlify/Vercel
* 🔍 Run test suites and static analysis

> Sample workflow file: `.github/workflows/deploy.yml`

```yaml
name: React CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
```

---

## 🤝 Contributions

PRs and feedback are welcome! This project was part of a learning journey — feel free to fork, contribute, or improve upon it.

---

## 📜 License

This project is licensed under the MIT License. See LICENSE for details.

---

## 🙋‍♂️ About the Developer

Ongun Akay, a Senior Full-Stack Developer with expertise across various technologies.

👀 I specialize in full-stack development with extensive experience in frontend and backend technologies.
🌱 Currently, I'm sharpening my skills in advanced concepts of web development.
💞️ I’m always open to exciting collaborations and projects that challenge my abilities.
📫 You can reach me at info@ongunakay.com.

* 🌐 Website: [ongunakay.com](https://ongunakay.com)
* 💼 LinkedIn: [linkedin.com/in/ongunakay](https://linkedin.com/in/ongunakay)
* 🧑‍💻 GitHub: [github.com/ongunakaycom](https://github.com/ongunakaycom)
* 📬 Email: [info@ongunakay.com](mailto:info@ongunakay.com)

---

⭐ If you like this project, give it a star on GitHub to support open source!
