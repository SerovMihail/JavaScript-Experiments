import { Controller, Post, Body, Req, Request, UnauthorizedException, Optional, Res } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { LoginResponseDto } from "./models/LoginResponseDto";
import { LoginDto } from "./models/LoginDto";
import { Response } from "express";

@Controller('login')
export default class AuthController {
    
  @Post()
  @ApiResponse({ type: LoginResponseDto, status: 201 })
  async login(@Body() data: LoginDto, @Req() req): Promise<LoginResponseDto> {
    const { email, password } = data;
    debugger;
    try {
    //   const session = await sessionLogin({ email, password });
    req.res.cookie('sessionId', 123);
    return Promise.resolve({sessionId: "1", userEmail: "email", userId: "1"});
    } catch (e) {
      console.log('login error', e);
      throw new UnauthorizedException('Invalid email or password');
    }
  }
}