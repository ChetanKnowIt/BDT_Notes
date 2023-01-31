import tkinter as tk
import requests
from bs4 import BeautifulSoup

def download_and_install():
    selected_package = package_listbox.get(package_listbox.curselection())
    # code to download and install the selected package
    # ...

root = tk.Tk()
root.geometry("500x500")

scrollbar = tk.Scrollbar(root)
scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

package_listbox = tk.Listbox(root, yscrollcommand=scrollbar.set)
package_listbox.pack(fill=tk.BOTH, expand=True)

scrollbar.config(command=package_listbox.yview)

# fetch the list of packages from the Apache website
response = requests.get("https://downloads.apache.org/")
# parse the response and extract the list of packages
# ...
# fetch the HTML content of the Apache website
response = requests.get("https://downloads.apache.org/")
html_content = response.text

# parse the HTML content with BeautifulSoup
soup = BeautifulSoup(html_content, "html.parser")

# find all the links in the HTML content
links = soup.find_all("a")

# extract the list of packages from the links
packages = []
for link in links:
    href = link.get("href")
    if href.startswith("http://www.apache.org/dyn/closer.cgi/"):
        package_name = href.split("/")[-1]
        packages.append(package_name)


print(packages)

for package in packages:
    package_listbox.insert(tk.END, package)

tk.Button(root, text="Download and Install", command=download_and_install).pack()

root.mainloop()
