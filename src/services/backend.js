import api from "@/services/api.js";

export default {
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