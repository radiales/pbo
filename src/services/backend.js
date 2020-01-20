import api from "@/services/api.js";

export default {
    fetchRandomIngredients(Count) {
        return api().get("ingredients", { params: { count: Count} });
    },
    findIngredient(constraint) {
        return api().get("ingredient", { params: { name: constraint }});
    },
    fetchRecipes(ingredients) {
        return api().post("recipes", ingredients);
    },
    createInvite(meal){
        return api().post("share?action=create", meal);
    },
    fetchInvite(Id){
        return api().get("share", { params: { id: Id} });
    },
    putInvite(id, data){
        return api().post("share?action=add&id=" + id, data);
    }
};