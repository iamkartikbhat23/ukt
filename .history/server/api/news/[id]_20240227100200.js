export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig() ;
    const { id } = event.context.params ;
    let url = config.apiURL+'view/'+id ;
    const { data } = await $fetch(url,{
        headers: {
	    	"Accept": "application/json"
	  	},
    }) ;
    return { news: data.news,otherNews: data.otherNews} 
})