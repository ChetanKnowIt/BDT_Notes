import tkinter as tk
import requests
import hashlib
import shutil
import os

def download_and_install():
    # get the selected package from the GUI
    selected_package = package_var.get()
    # download the selected package
    r = requests.get(selected_package)
    with open("package.tar.gz", "wb") as f:
        f.write(r.content)
    # verify the checksum
    sha256 = hashlib.sha256()
    with open("package.tar.gz", "rb") as f:
        while True:
            chunk = f.read(4096)
            if not chunk:
                break
            sha256.update(chunk)
    checksum = sha256.hexdigest()
    if checksum != expected_checksum:
        # handle checksum verification failure
        pass
    # copy the file to /usr/local
    shutil.copy("package.tar.gz", "/usr/local")
    # set JAVA_HOME
    os.environ["JAVA_HOME"] = "/usr/local/java"

# create the GUI
root = tk.Tk()
package_var = tk.StringVar()
package_list = ["https://www.apache.org/dyn/closer.lua/cassandra/4.0.7/apache-cassandra-4.0.7-bin.tar.gz", "https://downloads.apache.org/hive/hive-3.1.3/apache-hive-3.1.3-bin.tar.gz"]
for package in package_list:
    tk.Radiobutton(root, text=package, variable=package_var, value=package).pack()
tk.Button(root, text="Download and Install", command=download_and_install).pack()
root.mainloop()
