import { User } from './states/models/user.model';
import { Config } from './states/models/config.model';

/**
 * Store all app states
 */
export default interface IAppState {
    /**
     * All user information
     */
    user: User;
    /**
     * App configuration
     */
    config: Config;
}