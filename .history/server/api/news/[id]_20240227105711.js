export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig() ;
    const { id } = event.context.params ;
    let url = config.apiURL+'view/'+id ;
    const { data } = await $fetch(url,{
        headers: {
	    	"Accept": "application/json"
	  	},
    }) ;
    console.log("data.news")
    console.log({ news: data.news, otherNews: data.randomNews} )
    return { data } 
})