import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async createRole(dto: CreateRoleDto) {
    try {
      const role = await this.roleRepository.create(dto);
      return role;
    } catch (error) {
      //   console.log(error);
      return error.message;
    }
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } });
    return role;
  }

  async getAllRoles() {
    return await this.roleRepository.findAll();
  }

  async removeRoles(id: number) {
    const product = await this.roleRepository.findByPk(id);

    if (!product) {
      return null;
    }

    await product.destroy();

    return product;
  }
}
