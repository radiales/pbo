import api from "@/services/api.js";

export default {
    fetchRecipes(ingredients) {
        return api().post("recipes", ingredients);
    }
};