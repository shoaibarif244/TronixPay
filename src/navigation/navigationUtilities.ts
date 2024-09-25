import {
  PartialState,
  NavigationState,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { RootStackParamList } from "./types";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const RootNavigation = {
  navigate(name: string, params?: any) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name as never, params as never);
    }
  },
  goBack() {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  },
  replace(name: string, params?: any) {
    if (navigationRef.isReady()) {
      navigationRef.resetRoot({ index: 0, routes: [{ name, params }] });
    }
  },
  resetRoot(state?: PartialState<NavigationState> | NavigationState) {
    if (navigationRef.isReady()) {
      navigationRef.resetRoot(state);
    }
  },
};
