export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig() ;
    const { offset } = getQuery(event) ;
    const data = [] ;
    let url = config.apiURL+'news/'+offset ;
    console.log(url)
    const { fetcheddata } = await $fetch(url,{
        headers: {
	    	"Accept": "application/json"
	  	},
    }) ;
    return { data } 
})