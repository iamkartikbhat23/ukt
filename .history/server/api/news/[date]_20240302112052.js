export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig() ;
    const { date } = event.context.params ;
    let url = config.apiURL+'view/'+id ;
    const { data } = await $fetch(url,{
        headers: {
	    	"Accept": "application/json"
	  	},
    }) ;
    return  data 
})