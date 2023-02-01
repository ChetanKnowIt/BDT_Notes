import tkinter as tk
from tkinter import ttk
import requests
from bs4 import BeautifulSoup
import sv_ttk

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
html_content = response.text

# parse the HTML content with BeautifulSoup
soup = BeautifulSoup(html_content, "html.parser")

# find the pre in the HTML content
pre = soup.find("pre")

# extract the list of packages from the links
links = []
for link in pre.find_all("a"):
    href = link.get("href")
    links.append(href)
names_with_slash = links[4:-1]
packages = []
for i in names_with_slash:
    packages.append(i.strip('/'))

# add packages to
for package in packages:
    package_listbox.insert(tk.END, package)

ttk.Button(root, text="Download and Install", style='Accent.TButton',command=download_and_install).pack()

sv_ttk.set_theme("light")
root.mainloop()
