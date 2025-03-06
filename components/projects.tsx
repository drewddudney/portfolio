"use client"

import { Github, LineChart, BarChart3, Cpu } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Stock Price Prediction Model",
      description:
        "Developed a predictive analytics model to forecast stock price movements, integrating Python, SQL, and Power BI to track performance across 7 major tech stocks.",
      details: [
        "Engineered a machine learning pipeline leveraging historical stock data (10 years, thousands of records), achieving up to 70% directional accuracy in stock movement predictions.",
        "Designed an interactive Power BI dashboard providing real-time insights, enabling data-driven investment decisions based on model outputs.",
        "Automated data ingestion by scraping Yahoo Finance into a SQL database, as well as pull historical data from a Kaggle dataset, creating an automated ETL process.",
        "Improved model accuracy by 17% through feature engineering (moving averages, volatility, EMA) and data cleaning, optimizing performance for financial forecasting.",
      ],
      github: "https://github.com/drewddudney/StockModel",
      icon: <LineChart className="h-10 w-10" />,
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Kyle Field Project (Texas A&M Football Analysis)",
      description: "Analyzed Texas A&M's performance metrics for home vs. away games (2014-2024).",
      details: [
        "Utilized Python's Seaborn, MatplotLib and Plotly to visualize key performance indicators (KPIs) and correlations to generate data-driven insights",
      ],
      github: "https://github.com/drewddudney/TAMU_KyleField",
      icon: <BarChart3 className="h-10 w-10" />,
      color: "from-red-500/20 to-amber-500/20",
    },
    {
      title: "Capstone Project – Software Engineer",
      description: "Developed a semi-automated UV robot to disinfect areas with COVID-19 and Flu bacteria by 99.98%",
      details: [
        "Collaborated with a team to design and present the product to investors.",
        "Led software development for the UV sensor as well as co-programmed Robot with one other developer, using C++ and Python across microcontroller platforms.",
      ],
      github: "https://github.com/drewddudney/CAST",
      icon: <Cpu className="h-10 w-10" />,
      color: "from-emerald-500/20 to-teal-500/20",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container max-w-6xl px-4 md:px-6 mx-auto">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Explore my technical projects showcasing data analysis, machine learning, and software engineering skills.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div key={idx} className="group">
              <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                <div
                  className={`p-6 rounded-xl bg-gradient-to-br ${project.color} flex flex-col justify-center items-center text-center h-full`}
                >
                  <div className="w-20 h-20 rounded-full bg-background/90 flex items-center justify-center mb-4 text-primary">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors mt-4"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </div>

                <div className="space-y-4">
                  <p className="text-lg">{project.description}</p>
                  <ul className="space-y-2">
                    {project.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

