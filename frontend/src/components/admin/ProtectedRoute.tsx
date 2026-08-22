import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAdminSession } from "../../services/auth.service";
import { supabase } from "../../lib/supabase";

const ProtectedRoute = () => {
	const [status, setStatus] = useState<"loading" | "allowed" | "denied">(
		"loading"
	);

	useEffect(() => {
		let active = true;

		const checkSession = async () => {
			const { session, isAdmin } = await getAdminSession();

			if (active) {
				setStatus(session && isAdmin ? "allowed" : "denied");
			}
		};

		checkSession();

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(() => {
			checkSession();
		});

		return () => {
			active = false;
			subscription.unsubscribe();
		};
	}, []);

	if (status === "loading") {
		return null;
	}

	return status === "allowed" ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
