from bs4 import BeautifulSoup
import requests
import time
import pandas as pd

def scrape_jobs():
  """Scrape the jobs from the website and save them to a CSV file."""

  url = "https://www.ethiojobs.net/search-results-jobs/?searchId=1692557344.9716&action=search&page=1&view=list"
  response = requests.get(url , headers={'User-Agent':'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/110.0'})
  print(response)
#   soup = BeautifulSoup(response.text, "lxml")

#   jobs = soup.find_all("table", class_="searchResultsJobs")
#   print(jobs)

#   job_titles = []
#   job_links = []

#   for job in jobs:
#     job_title = job.find("h2").text
#     job_link = job.find("a")["href"]

#     job_titles.append(job_title)
#     job_links.append(job_link)

#   with open("jobs.csv", "w") as csvfile:
#     writer = csv.writer(csvfile)
#     writer.writerow(["Job Title", "Job Link"])
#     for i in range(len(job_titles)):
#       writer.writerow([job_titles[i], job_links[i]])

# def main():
#   while True:
#     scrape_jobs()
#     time.sleep(3600)

# if __name__ == "__main__":
#   main()
