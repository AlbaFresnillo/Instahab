import { likeReel, hasLikedReel, unlikeReel } from '../db/likes.js';

const likeReelController = async (req, res, next) => {
  try {
    const { reelId } = req.params;
    const { userId } = req;

    await likeReel(userId, reelId);

    res.status(201).json({ message: 'Reel liked' });
  } catch (error) {
    next(error);
  }
};

const unlikeReelController = async (req, res, next) => {
  try {
    const { reelId } = req.params;
    const { userId } = req;

    await unlikeReel(userId, reelId);

    res.json({ message: 'Reel unliked' });
  } catch (error) {
    next(error);
  }
};

const hasLikedReelController = async (req, res, next) => {
  try {
    const { reelId } = req.body;
    const { userId } = req.params;

    const hasLiked = await hasLikedReel(userId, reelId);

    res.json({ hasLiked });
  } catch (error) {
    next(error);
  }
};

export {
  likeReelController,
  unlikeReelController,
  hasLikedReelController,
};
import { hasLiked, isLiked, unlikeReel } from '../db/likes.js';

const isLikedController = async (req, res, next) => {
  try {
    const { reelId } = req.params;
    const { userId } = req;

    await isLiked(userId, reelId);

    res.status(201).json({ message: 'Reel liked' });
  } catch (error) {
    if (error.message === 'El usuario ya ha dado like a este reel') {
      res.status(409).json({ message: error.message });
    } else {
      next(error);
    }
  }
};

const hasLikedController = async (req, res, next) => {
  try {
    const { reelId } = req.params;
    const { userId } = req.params;

    const hasLiked = await isLiked(userId, reelId);

    res.json({ isLiked: hasLiked });
  } catch (error) {
    next(error);
  }
};

export { hasLikedController, unlikeReelController, isLikedController };