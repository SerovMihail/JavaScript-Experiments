import {
  Body,
  Controller,
  Post,
  Res,
  UnauthorizedException,
  Req,
  Get,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { LoginDto } from './models/LoginDto';
import { LoginResponseDto } from './models/LoginResponseDto';
import { Request } from 'express';
import { IsAuthenticatedGuard } from './guards/IsAuthenticatedGuard';

@Controller('login')
export default class AuthController {
  @Post()
  @ApiResponse({ type: LoginResponseDto, status: 201 })
  async login(
    @Body() data: LoginDto,
    @Req() request: Request,
  ): Promise<{ token: string }> {
    const { email, password } = data;
    try {
      //   const session = await sessionLogin({ email, password });
      request.res.cookie('sessionId', '222123', {
        signed: true,
        httpOnly: true,
        sameSite: true,
      });
      return { token: '123' };
    } catch (e) {
      console.log('login error', e);
      throw new UnauthorizedException('Invalid email or password');
    }
  }

  @Get('secured')
  @ApiResponse({ status: 200 })
  @UseGuards(IsAuthenticatedGuard)
  async secured(): Promise<{ bla: string }> {
    return { bla: 'bla' };
  }
  catch(e) {
    console.log('login error', e);
    throw new UnauthorizedException('Invalid email or password');
  }
}
