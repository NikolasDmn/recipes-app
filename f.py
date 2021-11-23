import re
import requests

links = ["https://www.themealdb.com/images/category/beef.png",
         "https://www.themealdb.com/images/category/chicken.png",
         "https://www.themealdb.com/images/category/dessert.png",
         "https://www.themealdb.com/images/category/lamb.png",
         "https://www.themealdb.com/images/category/miscellaneous.png",
         "https://www.themealdb.com/images/category/pasta.png",
         "https://www.themealdb.com/images/category/pork.png",
         "https://www.themealdb.com/images/category/seafood.png",
         "https://www.themealdb.com/images/category/side.png",
         "https://www.themealdb.com/images/category/starter.png",
         "https://www.themealdb.com/images/category/vegan.png",
         "https://www.themealdb.com/images/category/vegetarian.png",
         "https://www.themealdb.com/images/category/breakfast.png",
         "https://www.themealdb.com/images/category/goat.png"]
for i in links:
    a = i.split("/")[-1].replace(".png", "")
    print(f"\"{a}\",")
