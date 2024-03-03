export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig() ;
    const { offset } = getQuery(event) ;
    const data = [] ;
    let url = config.apiURL+'news/'+offset ;
    console.log(url)
    const { fetchedData } = await $fetch(url,{
        headers: {
	    	"Accept": "application/json"
	  	},
    }) ;
    data.push(...fetchedData)
    return { data } 
})