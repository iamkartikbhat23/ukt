export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig() ;
    
    let url = config.apiURL+'news/'+id ;
    const { data } = await $fetch(url,{
        headers: {
	    	"Accept": "application/json"
	  	},
    }) ;
    return { data: data } 
})