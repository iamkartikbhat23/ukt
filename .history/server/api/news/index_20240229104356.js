export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig() ;
    const { offset } = event.context.params ;
    let url = config.apiURL+'news/'+offset ;
    conso
    const { data } = await $fetch(url,{
        headers: {
	    	"Accept": "application/json"
	  	},
    }) ;
    return { data } 
})