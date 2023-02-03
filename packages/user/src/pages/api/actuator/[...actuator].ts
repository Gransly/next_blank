import { nextActuator } from '@bueno-systems/next-actuator';

// Export the handler function with some options
export default nextActuator({
    enableHealth: true, // enable/disable /health endpoint (default true)
    enableMetrics: true, // enable/disable /metrics endpoint (default true)
    enableInfo: true, // enable/disable /info endpoint (default true)
    healthEndpoint: '/health', // change the /health endpoint to something else
    metricsEndpoint: '/metrics', // change the /metrics endpoint to something else
    infoEndpoint: '/info', // change the /info endpoint to something else
});
