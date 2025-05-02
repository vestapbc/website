import { VestaIcon } from "./vesta-icon"
import { CheckCircle, XCircle } from "lucide-react"

export function PartnerComparison() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="py-4 px-6 text-left border-b border-gray-200 w-1/4">Partnership Features</th>
            <th className="py-4 px-6 text-center border-b border-gray-200">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">Basic</span>
                <span className="text-sm text-gray-500">For small organizations</span>
              </div>
            </th>
            <th className="py-4 px-6 text-center border-b border-gray-200 bg-orange-50">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-orange-500">Premium</span>
                <span className="text-sm text-gray-500">Most popular</span>
              </div>
            </th>
            <th className="py-4 px-6 text-center border-b border-gray-200">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">Enterprise</span>
                <span className="text-sm text-gray-500">For large organizations</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-4 px-6 border-b border-gray-200 font-medium">
              <div className="flex items-center gap-2">
                <VestaIcon name="file" size={20} />
                White-labeled platform
              </div>
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center">
              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center bg-orange-50">
              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center">
              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="py-4 px-6 border-b border-gray-200 font-medium">
              <div className="flex items-center gap-2">
                <VestaIcon name="dollar" size={20} />
                Revenue sharing
              </div>
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center">15%</td>
            <td className="py-4 px-6 border-b border-gray-200 text-center bg-orange-50">25%</td>
            <td className="py-4 px-6 border-b border-gray-200 text-center">Custom</td>
          </tr>
          <tr>
            <td className="py-4 px-6 border-b border-gray-200 font-medium">
              <div className="flex items-center gap-2">
                <VestaIcon name="tablet" size={20} />
                Dedicated dashboard
              </div>
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center">
              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center bg-orange-50">
              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center">
              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="py-4 px-6 border-b border-gray-200 font-medium">
              <div className="flex items-center gap-2">
                <VestaIcon name="bell" size={20} />
                Priority support
              </div>
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center">
              <XCircle className="h-5 w-5 text-gray-400 mx-auto" />
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center bg-orange-50">
              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center">
              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="py-4 px-6 border-b border-gray-200 font-medium">
              <div className="flex items-center gap-2">
                <VestaIcon name="calendar-event" size={20} />
                Dedicated account manager
              </div>
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center">
              <XCircle className="h-5 w-5 text-gray-400 mx-auto" />
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center bg-orange-50">
              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center">
              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="py-4 px-6 border-b border-gray-200 font-medium">
              <div className="flex items-center gap-2">
                <VestaIcon name="pin" size={20} />
                Custom integration
              </div>
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center">
              <XCircle className="h-5 w-5 text-gray-400 mx-auto" />
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center bg-orange-50">
              <XCircle className="h-5 w-5 text-gray-400 mx-auto" />
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center">
              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="py-4 px-6 border-b border-gray-200"></td>
            <td className="py-4 px-6 border-b border-gray-200 text-center">
              <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition-colors">
                Get Started
              </button>
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center bg-orange-50">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                Get Started
              </button>
            </td>
            <td className="py-4 px-6 border-b border-gray-200 text-center">
              <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition-colors">
                Contact Us
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
