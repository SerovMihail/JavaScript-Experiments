import { Controller, Post, Body, Req, Request, UnauthorizedException, Optional } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { LoginResponseDto } from "./models/LoginResponseDto";
import { LoginDto } from "./models/LoginDto";

@Controller('login')
export default class AuthController {
    
  @Post()
  @ApiResponse({ type: LoginResponseDto, status: 201 })
  async login(@Body() data: LoginDto, @Req() @Optional() request: Request): Promise<LoginResponseDto> {
    const { email, password } = data;
    debugger;
    console.log(request);
    try {
    //   const session = await sessionLogin({ email, password });
    //   request.res.cookie('sessionId', session.sessionId);
    return Promise.resolve({sessionId: "1", userEmail: "email", userId: "1"});
    } catch (e) {
      console.log('login error', e);
      throw new UnauthorizedException('Invalid email or password');
    }
  }
}