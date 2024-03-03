export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig() ;
    const { id } 
    let url = config.apiURL+'news/'+id ;
    const { data } = await $fetch(url,{
        headers: {
	    	"Accept": "application/json"
	  	},
    }) ;
    return { data: data } 
})