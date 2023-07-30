import { Request, Response } from "express";
import { User } from "../entities/user.entity";

const createUser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname } = req.body;
    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { firstname, lastname } = req.body;
    const user = await User.findOneBy({ id: parseInt(id) });
    if (!user) return res.status(404).json({ message: "User not found" });
    user.firstname = firstname;
    user.lastname = lastname;
    user.save();

    // await User.update({id: parseInt(id)}, body);
    return res.sendStatus(204);
  } catch (error) {}
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await User.delete({ id: parseInt(id) });
    return res.sendStatus(204);
  } catch (error) {}
};

export { createUser, getUsers, updateUser, deleteUser };
