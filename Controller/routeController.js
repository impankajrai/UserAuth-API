
import UserModel from "../Model/UserModel.js";


export async function login(request, response) {
    const { emailphone, Password } = request.body;

    //backend authantication
    if (!emailphone || !Password) {
        response.status(400).json({success:false, "message": "All parameter are required" });
    }

    UserModel.findOne({ $or: [{ Email:emailphone }, { Mobile:emailphone }] }, (err, user) => {
        if (user) {
            if (user.Password === Password) {
                response.send({ success:true,message: "Login Successfull", user: user })
            } else {
                response.status(400).json({ success:false,message: "Wrong Password" })
            }
        }else{
            response.status(400).json({success:false , message: "Wrong Email/Mobile" })
        }
    })

}

export function register(request, response) {
    const { Email, CountryCode, Mobile, Password, Name } = request.body;

    if (!Email || !CountryCode || !Mobile || !Password || !Name) {
        response.status(400).json({ success:false,"message": "all fields are required" })
    }
    UserModel.findOne({ $or: [{ Email }, { Mobile }] }, (err, user) => {
        if (user) {
            response.status(400).json({success:false, message: " User already exist" })
        } else {
            
            const user = new UserModel({
                Name,
                Email,
                Mobile,
                CountryCode,
                Password
            })

            user.save(err => {
                if (err) {
                    response.status(400).json({success:false,message:err})
                } else {
                    response.status(200).json({success:true, message: "Successfully Registered, Please login now." })
                }
            })
        }
    }
    )
}
