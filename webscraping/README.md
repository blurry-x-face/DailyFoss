I didn't know much about json so I started by studying a bit about json and then about webscraping then I got to know few things like using the JS path to refer to a particular line of code which came in handy in this issue and I knew a bit about variables in JS and that we can use for loop here also because of the WebD workshop

I used the console of google chrome to extract the data

I had to do it in two steps as one page only loaded 50 movies

I went to this page first 
https://www.imdb.com/search/title/?genres=drama&groups=top_250&sort=user_rating,desc&ref_=adv_prv

The code is as follows :

list1to50=[]    // declared an array that will hold the data

movie={}        // declared an object that will temporarily hold info to be fed in the array

for(i=1;i<=50;i++){
    var movie={}
    
    movie["Movie Name"]=document.querySelector("#main > div > div.lister.list.detail.sub-list > div > div:nth-child("+i+") > div.lister-item-content > h3 > a").innerText       // when I copied the address, it had "(1)" in place of "("+i+")" this modification was done so than when the loop further iterates every movie in the list gets picked same modification was done for all four entries
    
    movie["Rating"]=document.querySelector("#main > div > div.lister.list.detail.sub-list > div > div:nth-child("+i+") > div.lister-item-content > div > div.inline-block.ratings-imdb-rating > strong").innerText
    
    movie["Director"]=document.querySelector("#main > div > div.lister.list.detail.sub-list > div > div:nth-child("+i+") > div.lister-item-content > p:nth-child(5) > a:nth-child(1)").innerText
    
    movie["Year of release"]=document.querySelector("#main > div > div.lister.list.detail.sub-list > div > div:nth-child("+1+") > div.lister-item-content > h3 > span.lister-item-year.text-muted.unbold").innerText.substring(1,5)     // here is used substring() function to removed the brackets from the year
    
	list1to50.push(movie)   // an object gets pushed into the array in every iteretion
}
copy(list1to50)     // an then i made a json file in my PC where I pasted it


After this I went to the page containing the entries from 51 to 100 and did the same thing and then pasted it at the end of the previously made json file and then I removed the square brackets (and added a comma) that were in the middle of the json file as both times the copied array had square brackets at ends and the ones in the midddle needed to be removed so that the whole data is in a single array
