import { connection } from '@/DBconfig/dbconfig';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';
import bcryptjs from  'bcryptjs';

connection();
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        
        console.log(reqBody);
        
        // check if user already exists
        const user = await User.findOne({ email });
        if (user) { 
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }
        
        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        
        const newUser = new User ({
            username,
            email,
            password: hashedPassword
        }) 
        const savedUser = await newUser.save();
        console.log(savedUser);
        
        return NextResponse.json({message: "user created succesfully",success: true, savedUser })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}