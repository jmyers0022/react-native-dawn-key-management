
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNDawnKeyManagementSpec.h"

@interface DawnKeyManagement : NSObject <NativeDawnKeyManagementSpec>
#else
#import <React/RCTBridgeModule.h>

@interface DawnKeyManagement : NSObject <RCTBridgeModule>
#endif

@end
