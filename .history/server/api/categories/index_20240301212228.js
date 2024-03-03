export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig() ;
    const { offset } = getQuery(event) ;
    let url = config.apiURL+'category/'+offset ;
    const { data } = await $fetch(url,{
        headers: {
	    	"Accept": "application/json"
	  	},
    }) ;
    return data 
})