import sys
from datetime import datetime

args = sys.argv

if len(args) != 2:
    print("python create_blog.py <Blog Title>")
    exit()

latest_blog_name = open("latest_blog").read().strip()
latest_blog = open(latest_blog_name + ".md").read()
lines = latest_blog.split("\n")

title = args[1]
next_blog_name = (
    f"{int(latest_blog_name.split('-')[0])+1 :03}-{title.replace(' ', '-').lower()}"
)


lines = (
    lines[:3]
    + f"""next:
  text: {args[1]}
  link: /blogs/{next_blog_name}""".split("\n")
    + lines[3:]
)

time = datetime.now().astimezone().replace(microsecond=0).isoformat()
with open(next_blog_name + ".md", "w") as f:
    f.write(f"""---
title: {title}
date: {time}
prev:
  text: {lines[1].split(':')[1].strip()}
  link: /blogs/{latest_blog_name}
---""")

with open(latest_blog_name + ".md", "w") as f:
    f.write("\n".join(lines))

with open("latest_blog", "w") as f:
    f.write(next_blog_name)
