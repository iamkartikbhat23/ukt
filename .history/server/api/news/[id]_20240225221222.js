export default defineEventHandler(async () => {
    const config = useRuntimeConfig() ;
 
    let url = config.apiURL+'news/' ;
    const { data } = await $fetch(url,{
        headers: {
	    	"Accept": "application/json"
	  	},
    }) ;
    return { data: data } 
})