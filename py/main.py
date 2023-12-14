import time
import requests 
from bs4 import BeautifulSoup
import pandas as pd
import json

job_title = []
job_desc = []
company = []
location = []
level = []
link = []
date = []
data = []

def fields(num):
    url = "https://www.ethiojobs.net/search-results-jobs/?searchId=1692557344.9716&action=search&page={}&view=list".format(num)


    r = requests.get(url , headers={'User-Agent':'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/110.0'})
    global job_title
    global company
    global job_desc 
    global link
    global date
    global location
    def array(x):
        a = []
        for i in x:
            n = i.text
            if str(n) in company:
             continue
            a.append(n)
        return a
    def array2(x):
        a = []
        for i in x:
            n = i.find('a')
            # print(n['href'])
            a.append(n['href'])
        return a
    def array3(x):
        a = []
        for i in range(len(x)):
            if i % 2 == 0:
                continue
            n = x[i].text
            a.append(n)
        return a
    def remove_tabs_and_newlines(cities):
        """Removes tabs and newlines from a list of strings."""
        for i in range(len(cities)):
            cities[i] = cities[i].replace("\t", "").replace("\n", "")
            if not cities[i]:      
                cities[i] = "null"
        return cities
    def remove_tabs(cities):
        """Removes tabs and newlines from a list of strings."""
        i = 0
        while i  < len(cities):
            if cities[i] in company:
                cities.pop(i)
            i+=1
        return cities

    soup = BeautifulSoup(r.text, "lxml")

    jobs = soup.find("tbody", class_="searchResultsJobs")

    # jobs_title = soup.find_all("div" , class_ = "listing-title")

    job_titlet = soup.find_all('h2')
    job_title = job_title +array(job_titlet)

    link = link + array2(job_titlet)

    companyt = jobs.find_all("a" , class_ = "company-name")
    company = company + array3(companyt)

    locationt = soup.find_all('span' , class_ = "work-palce captions-field")
    locationt = array(locationt)
    locationt = remove_tabs_and_newlines(locationt)
    locationt = remove_tabs(locationt)
    location = location + locationt


    datet = soup.find_all('span' , class_ = "text-danger captions-field")
    date = date + array(datet)


    job_desct = soup.find_all('div' , class_ = "show-brief")
    job_desc = job_desc + array(job_desct)

""" print(len(location) ,location)

# for i in range(1,5):
#     fields(i)
# print(len(company),len(job_title),len(location),len(job_desc),len(link),len(date))

# df = pd.DataFrame({"company" : company , "job_title" : job_title , "location" : location , "job_desc" : job_desc , "link" : link , "date" : date })


# for i in range(len(company)):
#     data.append({"company_name" : company[i] , "job_title" : job_title[i] , "job_location" : location[i] , "desc" : job_desc[i] , "link" : link[i] , "date" : date[i] })

# rf = pd.read_csv('ethio_jobs' , index_col=None)
# print(rf , df)
# for i in range(len(rf)):
#     is_in_df = rf.iloc[i].isin(df)
#     print(is_in_df , rf.iloc[i])
#     if is_in_df.any():
#         print("news")
    # if rf.any().iloc[i] != df.any().iloc[i]:
    #     print(rf.iloc[i]['company'] )

# df.to_csv('ethio_jobs' , index=None)

# with open('data.json', 'w') as f:
#     json.dump(data, f)

# with open('data.json', 'r') as f:
#     array = json.load(f)

# for item in data:
#     if item not in array:
#         response = requests.post('http://localhost:3000/task' , item)
#         if response.status_code == 200:
#             print(response.content)
#         else:
#             print(response.status_code) """ 


def main():
  while True:
    for i in range(1,5):
        fields(i)
    # print(len(company),len(job_title),len(location),len(job_desc),len(link),len(date))
    for i in range(len(company)):
        data.append({"company_name" : company[i] , "job_title" : job_title[i] , "job_location" : location[i] , "desc" : job_desc[i] , "link" : link[i] , "date" : date[i] })
    with open('data.json', 'r') as f:
     array = json.load(f)
    for item in data:
        if item not in array:
            response = requests.post('http://localhost:3000/task' , item)
            if response.status_code == 200:
                print(response.content)
            else:
                print(response.status_code)
    with open('data.json', 'w') as f:
        json.dump(data, f)
    time.sleep(3600 * 5)
if __name__ == "__main__":
  main()