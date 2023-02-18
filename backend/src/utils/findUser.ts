export const findUser = async (model: any, id: string | number) => {
    try {
        let user = await model.findById({_id: id})

        if(!user) {
            user = await model.create({ _id: id })
        }

        return user
    } catch (e) {
        console.error("Unexpected MongoDB error while trying to create user:", e);
    }
}
