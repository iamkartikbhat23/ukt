export default defineEventHandler(async (event) => {
    console.log("here") ;
    const config = useRuntimeConfig() ;
 
    let url = config.apiURL+'dashboard' ;
    const { data } = await $fetch(url,{
        headers: {
	    	"Accept": "application/json"
	  	},
    }) ;
    return { data: data } 
})