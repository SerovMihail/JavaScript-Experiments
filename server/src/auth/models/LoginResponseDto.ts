import { ApiProperty } from '@nestjs/swagger';
export class LoginResponseDto {
  
  @ApiProperty()
  sessionId: string;

  @ApiProperty()
  userEmail: string;

  @ApiProperty()
  userId: string;
}
