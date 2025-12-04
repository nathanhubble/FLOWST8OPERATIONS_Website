import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    calLink: string;
}

export default function BookingModal({ isOpen, onClose, calLink }: BookingModalProps) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "discovery" });
            cal("ui", { "theme": "light", "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    // We'll use the "modal" instruction from Cal.com which is triggered by data attributes
    // or programmatic API. For React, the programmatic API is cleaner.

    useEffect(() => {
        if (isOpen) {
            (async function () {
                const cal = await getCalApi({ "namespace": "discovery" });
                cal("modal", {
                    calLink: calLink,
                    config: {
                        "layout": "month_view",
                        "theme": "light"
                    }
                });

                // Listen for close (Cal.com doesn't have a native close callback for modal easily accessible, 
                // so we rely on the user closing it. We just reset our state if needed, 
                // but for now we just trigger the modal open).
            })();
        }
    }, [isOpen, calLink]);

    return null; // The modal is handled by Cal.com's embed script
}
