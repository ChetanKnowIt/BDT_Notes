import requests
from bs4 import BeautifulSoup

# fetch the HTML content of the Apache website
response = requests.get("https://downloads.apache.org/")
html_content = response.text

# parse the HTML content with BeautifulSoup
soup = BeautifulSoup(html_content, "html.parser")

# find the parent container for the links
container = soup.find("pre")

#print(container)  # add this line to print the container variable
print(soup.prettify())  # add this line to print the parsed HTML content

# extract the list of packages from the links
packages = []
for link in container.find_all("a"):
    package_name = link.get("href").split("/")[1]
    packages.append(package_name)

print(packages)
