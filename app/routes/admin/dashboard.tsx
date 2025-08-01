import { getUser } from "~/appwrite/auth";
import {Header, StatsCard, TripCard} from "../../../components";
import {dashboardStats, user, allTrips} from "~/constants";
import type {Route} from './+types/dashboard';


export async function clientloader() {
    return await getUser();
}

export const clientLoader = async () => await getUser();

const Dashboard = ({ loaderData}: Route.ComponentProps) => {
    const user = loaderData as User | null;
}


const dashboard = () => {
    

    const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole, } = dashboardStats;

    return (
        <main className="dashboard wrapper">
            <Header
            title={`Welcome ${user?.name ?? 'Guest'}`}
            description="Track activity, trends and popular destinantions in real time."
            />

            <section className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <StatsCard
                        headerTitle="Total Trips"
                        total={totalTrips}
                        currentMonthCount={tripsCreated.currentMonth}
                        lastMonthCount={tripsCreated.lastMonth}
                    />
                   <StatsCard
                        headerTitle="Total Users"
                        total={totalUsers}
                        currentMonthCount={usersJoined.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                      <StatsCard
                        headerTitle="Active Users Today"
                        total={userRole.total}
                        currentMonthCount={userRole.currentMonth}
                        lastMonthCount={userRole.lastMonth}
                    />

                </div>
            </section>

            <section className="container">
                <h1 className="text-xl font-semibold text-dark-100"> Created Trips</h1>

                <div className="trip-grid">
                    {allTrips.map(({id, name, imageUrls, itinerary, tags, estimatedPrice}) => (
                        <TripCard
                        key={id}
                        id={id.toString()}
                        name={name}
                        imageUrl={imageUrls[0]}
                        location={itinerary?.[0]?.location ?? ''}
                        tags={tags}
                        price={estimatedPrice}
                        />
                    ))}
                </div>
            </section>
          
            {/* <TripCard/> */}
        </main>
    )
}


export default dashboard