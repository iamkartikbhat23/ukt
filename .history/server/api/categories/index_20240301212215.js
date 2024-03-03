export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig() ;
    const { id } = event.context.params ;
    const { offset } = getQuery(event) ;
    let url = config.apiURL+'category/'+id+'/'+offset ;
    const { data } = await $fetch(url,{
        headers: {
	    	"Accept": "application/json"
	  	},
    }) ;
    return data 
})